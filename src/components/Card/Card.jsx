import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <label htmlFor="numero">Informe um número</label>
            <input id="numero" type="text" value={props.numero} onChange={props.verificarNumero} />
            {props.numero % 2 === 0 ?
                <>
                    <p>Número Par</p>
                    <p>Os pares são aqueles terminados em 0, 2, 4, 6 ou 8</p>
                </>
                :
                <>
                    <p>Número Ímpar</p>
                    <p>Os ímpares são aqueles terminados em 1, 3, 5, 7 ou 9</p>
                </>
            }
        </div>
    )
}

export default Card;
