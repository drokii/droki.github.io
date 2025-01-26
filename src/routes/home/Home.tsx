import Typewriter, { PARAGRAPH_SPEED, PRIMARY_CONTENT_DELAY } from "../../components/typewriter/Typewriter";

export default function Home() {
    return (
        <>
            <h1><Typewriter text="Pedro's Place" /></h1>
            <p>
                <Typewriter text="I'm a Fullstack Software Engineer trying his darned best at making the 
                world a little less complicated." speed={PARAGRAPH_SPEED} delay={PRIMARY_CONTENT_DELAY} />
                <br />
                <Typewriter text="This is where I write what I feel needs writing, showcase what I make,
                 and what I'm capable of." speed={PARAGRAPH_SPEED} delay={PRIMARY_CONTENT_DELAY} />
            </p>
            <p>
                
            </p>
        </>
    )
}