import "./contact.css"
import team1 from './products/team1.png';
import team2 from './products/team2.png';


function Contact() {
  return (
    <main className="Contact">
      <h2>CONTACT PAGE</h2>
      <article>
        <section>
          <h3>Team 1</h3>
          <img src={team1} alt="Team 1" width="300"/>
        </section>
        <section>
          <h3>Team 2</h3>
          <img src={team2} alt="Team 2"  width="300"/>
        </section>
      </article>
    </main>
  );
}

export default Contact;
