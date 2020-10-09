const SearchPortifolioByClassRoomService = require('../services/SearchPortfolioByClassRoomService');

module.exports = {
  async index(request, response) {
    const { classroom_id } = request.params;

    const searchPortfolios = new SearchPortifolioByClassRoomService();

    const portfolios = await searchPortfolios.execute({
      classroom_id,
    });

    return response.json(portfolios);
  },
};
