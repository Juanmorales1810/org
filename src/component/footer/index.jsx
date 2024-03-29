import './footer.css';

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className='redes' >
            <a href="https://juanmorales1810.github.io/Portfolio/">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://juanmorales1810.github.io/Portfolio/">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://juanmorales1810.github.io/Portfolio/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Juan Morales.</strong>
    </footer>
}

export default Footer