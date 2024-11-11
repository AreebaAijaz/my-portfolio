import "../../styles/about.css"
import Image from "next/image"

export default function About(){
    return(
        <section id="about" className="abt-section">
            <main className="abt-main">
            <div className="abt-img">
                    <Image src="/girl.png" alt="" height={200} width={200} />
                </div>

                <div className="text">
                <h1>About  <span className="me">Me</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil placeat, facilis nostrum officiis odio reiciendis, aperiam veniam dolores saepe voluptatibus a enim molestias cupiditate accusantium! Distinctio a cumque quis perferendis?
                Voluptates iste et sequi autem delectus aperiam, magnam placeat veritatis dolorem repudiandae, inventore consectetur perspiciatis ducimus fugit optio a soluta pariatur! Dolorum, temporibus. Deserunt sapiente itaque ab ad a et.
                Suscipit mollitia dolorem facere velit, consectetur tenetur dolores, dignissimos laboriosam quis eligendi veritatis odit provident dolore sed quod nesciunt reiciendis excepturi reprehenderit, qui asperiores sequi possimus! Repudiandae eaque nemo libero?
                Molestias, nisi praesentium, placeat ipsum repellat reprehenderit ab, odit nostrum eius laboriosam sequi blanditiis unde libero. Reiciendis facere, molestiae consequatur nobis laudantium, deleniti voluptatum numquam rerum pariatur in, rem vero.
                Aliquid sunt, corporis doloremque vero autem laborum deserunt saepe, perspiciatis officiis illo fugit? Ipsum eos saepe odit dolores ab, reiciendis obcaecati porro hic eligendi recusandae ut culpa. Dolorem, animi accusamus!
                At architecto quidem consequatur vitae commodi facilis dicta nam earum, in quibusdam? Corrupti ad repudiandae velit suscipit vel dicta nemo ullam et, quasi, vitae molestias id praesentium, itaque cumque nostrum.</p>
                </div>
            </main>
        </section>
    )
}