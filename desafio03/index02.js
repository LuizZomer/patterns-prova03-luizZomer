class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserRepository {
    save(user) {
        console.log(`Salvando ${user.name} no banco de dados...`);
    }
}

class EmailService {
    sendEmail(user) {
        console.log(`Enviando email para ${user.email}...`);
    }
}

const user = new User("Ana", "ana@email.com");
const repo = new UserRepository();
const email = new EmailService();

repo.save(user);
email.sendEmail(user);
