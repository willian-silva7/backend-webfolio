# WebFolio

WebFolio is an application to assist educator to create and manage children's portfolio at institution.


## Installation

To install all development dependencies:

```
yarn
```

## Usage example

To start the application use the command:

```
yarn dev:server
```

### Routes

Post: /players:
Send player name

Get: /players:
Recover all created players

Post: /teamname
Send team name

Get: /teamname
Recover all created teams names

Post: /teams
Create teams and reserve list with all players registered in the system

Get: /teams
Recover all created teams

Get: /teams/reservelist
Recover reserve list players

### Tools

Tools used in the application:

- Express;
- Celebrate (to validate request body);
- Mongoose;
- Jsonwebtoken;
- Nodemailer;
- Redis (to Rate Limiter);

