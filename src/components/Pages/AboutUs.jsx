import classes from "./AboutUs.module.css";
import SubHeader from "../Layout/SubHeader";

const AboutUs = () => {
  return (
    <div className={classes.body}>
      <SubHeader />
      <div className={classes["about-us-container"]}>
        <h1 className={classes["grid-span-2-col"]}>Sobre Nosotros</h1>

        <img
          src="https://drive.google.com/uc?export=view&id=1y1joy4i8lSrHmKA_0zwoc0OZN7bZhRpV"
          alt="Restaurant"
        />
        <div>
          <h2>Nuestra historia</h2>
          <p>
            Hace más de 15 años, un grupo de amigos apasionados por la
            gastronomía decidió unirse para crear un restaurante que ofreciera
            la mejor comida y servicio a sus clientes. Fue así como nació
            reactFoods, que desde entonces ha sido un referente en la ciudad por
            su calidad y atención al cliente. Durante todo este tiempo, nos
            hemos esforzado por mejorar y ofrecer una experiencia única y
            memorable a cada uno de nuestros comensales.
          </p>
        </div>
        <div className={classes["grid-span-2-col"]}>
          <h2>Nuestra Filosofía</h2>
          <p>
            En nuestro restaurante, creemos que cada plato es una obra de arte y
            cada comensal es un invitado especial. Por ello, nuestro objetivo es
            brindar una experiencia única a través de nuestra selección de
            platillos y bebidas, preparados con los ingredientes más frescos y
            de la mejor calidad. Nos enorgullece decir que nuestro personal es
            altamente capacitado y está comprometido con la satisfacción de
            nuestros clientes. Siempre estamos buscando maneras de mejorar y
            brindar una experiencia aún mejor, por lo que nos esforzamos por
            innovar y ofrecer nuevas opciones en nuestro menú. En nuestro
            restaurante, queremos que nuestros comensales se sientan como en
            casa y disfruten de una experiencia gastronómica única e
            inolvidable.
          </p>
        </div>
        <h2 className={classes["grid-span-2-col"]}>Testimonios</h2>
        <div
          className={`${classes.testimonial} ${classes["grid-span-2-col"]} `}
        >
          <p>
            "Desde que probé la comida de este restaurante, me di cuenta de la
            calidad de los ingredientes que utilizan. Todo es fresco y se nota
            en el sabor de cada platillo. Además, el servicio es excelente,
            siempre están atentos a las necesidades de los comensales y el lugar
            es impecablemente limpio."
          </p>
          <p>- Daniel Pacheco</p>
        </div>
        <div
          className={`${classes.testimonial} ${classes["grid-span-2-col"]} `}
        >
          <p>
            "La atención al cliente en este restaurante es increíble. Desde que
            entras, te reciben con una sonrisa y están dispuestos a ayudarte en
            todo lo que necesites. Además, la calidad del servicio es excelente
            y se nota que todo el personal está capacitado para brindar la mejor
            experiencia a los clientes. Y por supuesto, la frescura de los
            ingredientes es inigualable."
          </p>
          <p>- Jane Doe</p>
        </div>
        <div
          className={`${classes.testimonial} ${classes["grid-span-2-col"]} `}
        >
          <p>
            "La experiencia que tuve en este restaurante fue excepcional. El
            trato al cliente es de primera calidad, el lugar está impecablemente
            limpio y la frescura de los ingredientes en cada platillo es
            evidente. Definitivamente, volveré a visitar este lugar y lo
            recomiendo ampliamente a todos aquellos que buscan una experiencia
            gastronómica única."
          </p>
          <p>- Jose Jose</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
