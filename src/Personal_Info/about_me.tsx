import "./css/about-me.css"
import Picture from "./picture/person.png"
function AboutMe() {
  return(
      <div className="about-me">
        <div className="text">
        <h2>About me</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Impedit esse soluta similique cumque quo nobis dolores labore voluptate nesciunt aliquam obcaecati repudiandae, 
          repellat corrupti, adipisci perspiciatis recusandae. Consectetur, ducimus placeat!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam, aut quas voluptatibus ipsum at rem dolorum! Distinctio error maxime officiis, vero reiciendis, 
          quis nemo neque aperiam eius perspiciatis accusantium veniam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam, aut quas voluptatibus ipsum at rem dolorum! Distinctio error maxime officiis, vero reiciendis, 
          quis nemo neque aperiam eius perspiciatis accusantium veniam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam, aut quas voluptatibus ipsum at rem dolorum! Distinctio error maxime officiis, vero reiciendis, 
          quis nemo neque aperiam eius perspiciatis accusantium veniam.</p>
        </div>
        <div className="photo">
          <img src={Picture} alt="person" />
        </div>
      </div>
    )
  }
  
  export default AboutMe;
  