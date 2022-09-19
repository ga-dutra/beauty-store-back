import { createRequire } from "module";
import dotenv from "dotenv";

const require = createRequire(import.meta.url);

dotenv.config();

function signUpEmail(email) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "beautystore.driven@gmail.com",
    subject: "Cadastro Beauty Store",
    text: "Obrigado por fazer o cadastro na Beauty Store!",
    html: "<strong>Beauty Store</strong>",
  };
  sgMail.send(msg).then(
    () => {
      console.log("e-mail sent");
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
}

export { signUpEmail };
