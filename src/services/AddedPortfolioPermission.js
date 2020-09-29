const Portfolio = require('../models/Portfolio');
const AppError = require('../errors/AppError');
const EtherealMailProvider = require('../providers/MailProvider/EtherealMailProvider');

class AddedPortfolioPermission {
  async execute({ portfolio_id, email }) {
    const portfolio = await Portfolio.findById(portfolio_id);

    if (!portfolio) {
      throw new AppError('Portifolio não Encontrado');
    }

    portfolio.permissions.push(email);

    const user = {
      email,
    };

    const mailProvider = new EtherealMailProvider();
    await mailProvider.sendMail({
      to: user,
      subject: 'Convite para permissão de usuário',
      body: `Olá você foi convidado para visualizar o portfolio de ${portfolio.nameChildren}. Para visualizar o portfolio primeiro se cadastre com este email em Webfolio.com.br e acessar o link http://localhost:3333/portfolio/${portfolio_id}`,
    });

    await portfolio.save();

    return portfolio;
  }
}

module.exports = AddedPortfolioPermission;
