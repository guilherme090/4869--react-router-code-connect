import { Link } from "../../components/Link/index.tsx";

export const NotFound = () => {
  return(<main>
    <h1 style={{ color: "white" }}>404 - Ops, estamos perdidos!</h1>
    <Link href="/">
        Voltar para a página incial.
    </Link>
  </main>);
}
