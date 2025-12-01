import { Container, Typography } from "@mui/material";

interface HowToPlayProps {
    onClick: () => void;
}

const HowToPlay = ({ onClick }: HowToPlayProps) => {
    return (
        <>
            {/** Explicación juego */}
            <Typography className="paragraph" variant="subtitle2">
                El objetivo del juego es simple, adivinar la palabra oculta. La palabra tiene 5 letras y tienes 6 intentos para adivinarla. La palabra es la misma para todas las personas en ese día.
            </Typography>
            <Typography className="paragraph" variant="subtitle2">
                Cada intento debe ser una palabra válida. En cada ronda el juego pinta cada letra de un color indicando si esa letra se encuentra o no en la palabra y si se encuentra en la posición correcta.
            </Typography>


            {/** Explicación colores */}
            <Container className="colors">
                <Container className="cell colors-element correct">M</Container>
                <Typography className="paragraph" variant="subtitle2">
                    VERDE significa que la letra está en la palabra y en la posición CORRECTA.
                </Typography>
            </Container>
            <Container className="colors">
                <Container className="cell colors-element in-the-word">A</Container>
                <Typography className="paragraph" variant="subtitle2">
                    AMARILLO significa que la letra letra está presente en la palabra pero en la posición INCORRECTA.
                </Typography>
            </Container>
            <Container className="colors">
                <Container className="cell colors-element incorrect">R</Container>
                <Typography className="paragraph" variant="subtitle2">
                    GRIS significa que la letra letra NO está presente en la palabra.
                </Typography>
            </Container>


            {/** Ejemplo */}
            <h3 className="sub-title">Ejemplo</h3>
            <Typography className="paragraph" variant="subtitle2">
                Imagina que la palabra oculta sea RUBIA. Empezamos con una palabra válida como FAROL.
            </Typography>
            <Container className="cells-container">
                <Container className="cell example-element incorrect">F</Container>
                <Container className="cell example-element in-the-word">A</Container>
                <Container className="cell example-element in-the-word">R</Container>
                <Container className="cell example-element incorrect">O</Container>
                <Container className="cell example-element incorrect">L</Container>
            </Container>
            <Typography className="paragraph" variant="subtitle2">
                El amarillo indica que tanto la letra R como la A estan en la palabra pero en la posicion incorrecta.
            </Typography>
            <Typography className="paragraph" variant="subtitle2">
                Puedo ahora intentar con una palabra que tenga la R y la A pero en otras posiciones como ROSAS.
            </Typography>
            <Container className="cells-container">
                <Container className="cell example-element correct">R</Container>
                <Container className="cell example-element incorrect">O</Container>
                <Container className="cell example-element incorrect">S</Container>
                <Container className="cell example-element in-the-word">A</Container>
                <Container className="cell example-element incorrect">S</Container>
            </Container>
            <Typography className="paragraph" variant="subtitle2">
                El color verde indica que la letra R está en la posición correcta mientras que la A sigue estando en la incorrecta.
            </Typography>
            <Typography className="paragraph" variant="subtitle2">
                Al final todas las letras deberían ser verdes.
            </Typography>
            <Container className="cells-container">
                <Container className="cell example-element correct">R</Container>
                <Container className="cell example-element correct">U</Container>
                <Container className="cell example-element correct">B</Container>
                <Container className="cell example-element correct">I</Container>
                <Container className="cell example-element correct">A</Container>
            </Container>


            {/** Letras repetidas */}
            <h3 className="sub-title">Letras repetidas</h3>
            <Typography className="paragraph" variant="subtitle2">
                La palabra oculta puede tener letras repetidas. En ese caso, las pistas son independientes para cada letra y tienen prioridad (verde es mayor a amarillo).
            </Typography>
            <Typography className="paragraph" variant="subtitle2">
                Por ejemplo si la palabra oculta es ROSAS y utilizamos SACOS entonces se marca la primera S en en amarillo y la segunda S en verde.
            </Typography>
            <Container className="cells-container">
                <Container className="cell example-element in-the-word">S</Container>
                <Container className="cell example-element transparent">A</Container>
                <Container className="cell example-element transparent">C</Container>
                <Container className="cell example-element transparent">O</Container>
                <Container className="cell example-element correct">S</Container>
            </Container>
            <Typography className="paragraph" variant="subtitle2">
                Si utilizo una palabra con una sola S como RATOS entonces se marca en verde la S pues esta en la posición correcta y no se avisa si hay una letra repetida.
            </Typography>
            <Container className="cells-container">
                <Container className="cell example-element transparent">R</Container>
                <Container className="cell example-element transparent">A</Container>
                <Container className="cell example-element transparent">T</Container>
                <Container className="cell example-element transparent">O</Container>
                <Container className="cell example-element correct">S</Container>
            </Container>


            {/** Listo para jugar */}
            <h3 className="sub-title">¿Listo/a para jugar?</h3>
            <button onClick={onClick} className="play">JUGAR AHORA</button>
        </>
    )
}

export default HowToPlay;