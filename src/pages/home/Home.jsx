import React, { useContext, useEffect, useRef, useState } from "react";
import AccessDenied from "../access_denied/AccessDenied";
import { SidebarComponent } from "../../components/Sidebar";
import { UsersRankingComponent } from "../../components/UsersRanking";
import { CardCourseComponent } from "../../components/CardCourse";
import { CardPropagandaComponent } from "../../components/CardPropaganda";
import courseSample2 from "../../assets/images/courseSample2.png"
import pratiDonaduzziLogo from "../../assets/images/pratiDonaduzziLogo.png"
import insideLogo from "../../assets/images/insideLogo.png"
import { Carousel } from 'primereact/carousel';
import '../../assets/css/home.css';
        
export default function Home(){

    function tela(){
        const examples =[
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: false
            },
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: false
            },
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: false
            },
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: false
            },
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: false
            },
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: true
            },
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: false
            },
            {
                curso_nome: 'Análise e Desenvolvimento de Sistemas',
                image: courseSample2,
                carga_horaria: '50',
                categoria_nome: 'ADS',
                feedback: 5,
                concluido: false
            }
        ]
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
                <div style={{display: 'flex'}}>
                    <div className="marketing-carrousel">
                        <Carousel centerMode value={propagandaExamples} numVisible={1} numScroll={1} itemTemplate={CardPropagandaComponent} />
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
                        categories.map((label) => (
                            <div style={{marginTop: '5%'}}>
                                <label style={{marginLeft: '5%', marginBottom: '15px', fontSize: '1.4vw', lineHeight: '1.25vw', fontWeight: 500 }}> {label} </label>
                                <Carousel centerMode value={examples} responsiveOptions={responsiveOptions} numVisible={5} numScroll={5} itemTemplate={CardCourseComponent} />
                            </div>
                        ))
                    }
                </div>
                <footer>
                    Entre em contato conosco(Email ou Whatsapp)
                </footer>
            </SidebarComponent>
        )
    }
    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}