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
import { useAuth } from "../../hooks/useAuth.ts"
import { useNavigate } from "react-router"

export const Register = () => {

    const { register } = useAuth();
    const navigate = useNavigate();

    const onSubmit = ( formData: FormData ) => {
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        let response = null

        if (typeof name === 'string' && 
            typeof email === 'string' &&
            typeof password === 'string'
        ) {
            response = register( name, email, password );
            if (response.success) {
                navigate('/auth/login');
            } else {
                console.error(response.error);
            }
        }
    
    }

    return (
        <AuthLayout>
            <AuthFormContainer bannerSrc={banner}>
                <Typography variant="h1" color="--offwhite">Cadastro</Typography>
                <Typography variant="h2" color="--offwhite">Olá! Preencha seus dados.</Typography>
                <Form action={ onSubmit }>
                    <Fieldset>
                        <Label>
                            Name
                        </Label>
                        <Input
                            name="name"
                            id="name"
                            placeholder="Full name"
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
                            placeholder="Type your e-mail"
                            required
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>
                            Password
                        </Label>
                        <Input
                            name="password"
                            id="password"
                            type="password"
                            required
                        />
                        <Checkbox label="Lembrar-me" />
                    </Fieldset>
                    <Button type="submit">
                        Cadastrar-se <IconArrowFoward />
                    </Button>
                </Form>
                <div>
                    <TextDivider text="ou conectar-se com outras contas" />
                    <Providers />
                </div>
                <footer className={styles.footer}>
                    <Typography variant="body" color="--offwhite">
                        Já tem conta?
                    </Typography>
                    <Link href='/auth/login'>
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