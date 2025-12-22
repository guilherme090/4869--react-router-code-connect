import { AuthFormContainer } from "../../components/AuthFormContainer/index.tsx";
import { Checkbox } from "../../components/Checkbox/index.tsx";
import { Input } from "../../components/Input/index.tsx";
import { Label } from "../../components/Label/index.tsx";
import Typography from "../../components/Typography/index.tsx";
import { Button } from "../../components/Button/index.tsx";
import banner from "./banner-login.png";
import { IconArrowFoward } from "../../components/icons/IconArrowFoward.tsx";
import { IconAssignement } from "../../components/icons/IconAssignement.tsx";
import { Form } from "../../components/Form/index.tsx";
import { Fieldset } from "../../components/Fieldset/index.tsx";
import { TextDivider } from "../../components/TextDivider/index.tsx";
import { Providers } from "../../components/Providers/index.tsx";
import { Link } from "../../components/Link/index.tsx";
import styles from "./login.module.css";
import { useAuth } from "../../hooks/useAuth.ts";
import { useNavigate } from "react-router";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email === "string" && typeof password === "string") {
      const response = login(email, password);
      if (response.success) {
        navigate("/");
      } else {
        console.error(response.error);
      }
    }
  };

  return (
    <AuthFormContainer bannerSrc={banner}>
      <Typography variant="h1" color="--offwhite">
        Login
      </Typography>
      <Typography variant="h2" color="--offwhite">
        Boas-vindas! Faça seu login.
      </Typography>
      <Form action={onSubmit}>
        <Fieldset>
          <Label>E-mail</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
        </Fieldset>
        <Fieldset>
          <Label>Senha</Label>
          <Input name="password" id="password" type="password" required />
          <Checkbox label="Lembrar-me" />
        </Fieldset>
        <Button type="submit">
          Login <IconArrowFoward />
        </Button>
      </Form>
      <div>
        <TextDivider text="ou entre com outras contas" />
        <Providers />
      </div>
      <footer className={styles.footer}>
        <Typography variant="body" color="--offwhite">
          Ainda não tem conta?
        </Typography>
        <Link href="/auth/register">
          <Typography variant="body" color="--highlight-green">
            Crie seu cadastro!
          </Typography>
          <IconAssignement color="#81FE88" />
        </Link>
      </footer>
    </AuthFormContainer>
  );
};
