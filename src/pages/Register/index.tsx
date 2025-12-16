import { AuthFormContainer } from "../../components/AuthFormContainer/index.tsx"
import { Checkbox } from "../../components/Checkbox/index.tsx"
import { Input } from "../../components/Input/index.tsx"
import { Label } from "../../components/Label/index.tsx"
import Typography from "../../components/Typography/index.tsx"
import { AuthLayout } from "../../layouts/Auth/index.tsx"
import { Button } from "../../components/Button/index.tsx"
import banner from './banner-register.png'
import { IconArrowFoward } from "../../components/icons/IconArrowFoward.tsx"
import { IconLogin } from "../../components/icons/IconLogin.tsx"
import { Form } from "../../components/Form/index.tsx"
import { Fieldset } from "../../components/Fieldset/index.tsx"
import { TextDivider } from "../../components/TextDivider/index.tsx"
import { Providers } from "../../components/Providers/index.tsx"
import { Link } from "../../components/Link/index.tsx"
import styles from './register.module.css'

export const Register = () => {
    return (
        <AuthLayout>
            <AuthFormContainer bannerSrc={banner}>
                <Typography variant="h1" color="--offwhite">Cadastro</Typography>
                <Typography variant="h2" color="--offwhite">Olá! Preencha seus dados.</Typography>
                <Form action="">
                    <Fieldset>
                        <Label>
                            Nome
                        </Label>
                        <Input
                            name="nome"
                            id="nome"
                            placeholder="Nome completo"
                            required
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>
                            E-mail
                        </Label>
                        <Input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>
                            Senha
                        </Label>
                        <Input
                            name="password"
                            id="password"
                            type="password"
                            required
                        />
                        <Checkbox label="Lembrar-me" required />
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
                        Já tem conta?
                    </Typography>
                    <Link href='#'>
                        <Typography variant="body" color="--highlight-green">
                            Faça seu login!
                        </Typography>
                        <IconLogin color="#81FE88" />
                    </Link>
                </footer>
            </AuthFormContainer>
        </AuthLayout>
    )
}