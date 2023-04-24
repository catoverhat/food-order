import SubHeader from "../Layout/SubHeader";
import classes from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <div className={classes.body}>
      <SubHeader />
      <main className={classes.main}>
        <div className={classes["contact-form"]}>
          <h1>Contact Us</h1>
          <p>
            Have a question or comment? Fill out the form below to get in touch
            with us.
          </p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 ReactFoods. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
