const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibeInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log("Curso criado!")
    }
}
// Objeto que vai herdar as propriedades e o que vai ceder as propriedades.
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibeInfos();

