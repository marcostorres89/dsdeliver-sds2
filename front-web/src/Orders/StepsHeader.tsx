function StepsHeader() {
    return (
        <>
            <header className="orders-steps-container">
                <div className="orders-steps-content">
                    <h1 className="steps-title">SIGA AS <br /> ETAPAS</h1>
                </div>
                <ul className="steps-items">
                   <li>
                       <span className="steps-number">1</span>
                       Selecione os produtos;
                   </li>
                   <li>
                       <span className="steps-number">2</span>
                       Selecione a localização; e,
                   </li> 
                   <li>
                       <span className="steps-number">3</span>
                       Clique em <strong>ENVIAR PEDIDO</strong>.
                   </li> 
                </ul>
            </header>
        </>
    )
}

export default StepsHeader