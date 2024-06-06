export const RoadmapService = {
  getProductsData() {
      return [
          {
              title: 'Análise e Desenvolvimento de Dados',
              value: 80
          },
          {
            title: 'Farmácia',
            value: 30
          },
          {
            title: 'Engenharia de Bioprocessos e Biotecnologia',
            value: 40
          },
          {
            title: 'Ciência de Dados',
            value: 60
          },
          {
            title: 'Tecno Enfermagem',
            value: 30
          },
      ];
  },

  getProductsSmall() {
      return Promise.resolve(this.getProductsData());
  },
};

