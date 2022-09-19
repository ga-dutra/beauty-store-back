import { createRequire } from "module";
const require = createRequire(import.meta.url);

function signUpEmail(email) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "beautystore.driven@gmail.com",
    subject: "Cadastro Beauty Store",
    text: "Obrigado por fazer o cadastro na Beauty Store!",
    html: "<strong>Obrigado por fazer o cadastro na Beauty Store!</strong>",
  };
  sgMail.send(msg).then(
    () => {
      console.log("e-mail sent to " + email);
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
}

function confirmedOrderEmail(email, name) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "beautystore.driven@gmail.com",
    subject: "Seu pedido foi na Beauty Store foi confirmado!",
    text: `Olá, ${name}!\n\nSeu pedido foi confirmado, e deverá ser entregue nos próximos dias.\n\nAgradecemos a confiança, e estamos aguardando seus próximos pedidos!\n\nBeauty Store Team`,
  };
  sgMail.send(msg).then(
    () => {
      console.log("e-mail sent to " + email);
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
}

export { signUpEmail, confirmedOrderEmail };
