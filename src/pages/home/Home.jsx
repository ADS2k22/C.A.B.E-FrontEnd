import React, { useState, useRef, useEffect } from "react";
import api from "../../services/api";
import AccessDenied from "../access_denied/AccessDenied";
import { SidebarComponent } from "../../components/Sidebar";
import { UsersRankingComponent } from "../../components/UsersRanking";
import { Card } from "../../components/Card";
import { CardPropagandaComponent } from "../../components/CardPropaganda";
import courseSample2 from "../../assets/images/courseSample2.png"
import pratiDonaduzziLogo from "../../assets/images/pratiDonaduzziLogo.png"
import insideLogo from "../../assets/images/insideLogo.png"
import { Carousel } from 'primereact/carousel';
import '../../assets/css/home.css';
import { FormContact } from "../../components/FormContact";
        
export default function Home(){
    const [cursos, setCursos] = useState(null)

    const findCursos = async () => {
        try {
            const data = await api.get(`/api/curso?idUser=${localStorage.getItem('idAdmin')}`,  {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCursos(data.data.slice(0, 15));
        } catch (err) {
     
        }
    }

    useEffect(() => {
        findCursos();
    }, [])

    function tela(){
        const propagandaExamples = [
            {
                image: pratiDonaduzziLogo
            },
            {
                image: insideLogo
            }
        ]
        const responsiveOptions = [
            {
                breakpoint: '1656px',
                numVisible: 4,
                numScroll: 4
            },
            {
                breakpoint: '1324px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '1036px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '714px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        const categories = [
            'Últimos Lançamentos',
            'Continue Assistindo',
            'Cursos com as melhores avaliações'
        ]
        return(
            <SidebarComponent>
                <div className="center-carousel">
                    <div className="marketing-carrousel">
                        <Carousel value={propagandaExamples} numVisible={1} numScroll={1} itemTemplate={CardPropagandaComponent} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '25px'}}>
                    <div className="center">
                        <label> Usuários Top Ranking </label>
                        <div>
                            <UsersRankingComponent/>
                        </div>
                    </div>
                    {
                        cursos && categories.map((label) => (
                            <div style={{marginTop: '5%'}}>
                                <label style={{marginLeft: '5%', marginBottom: '15px', fontSize: '1.4vw', lineHeight: '1.25vw', fontWeight: 500 }}> {label} </label>
                                <Carousel value={cursos} responsiveOptions={responsiveOptions} numVisible={5} numScroll={5} itemTemplate={Card} />
                            </div>
                        ))
                    }
                </div>
                <FormContact/>
            </SidebarComponent>
        )
    }
    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}