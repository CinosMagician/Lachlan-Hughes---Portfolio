import profilePic from '../../assets/profilepic.png';

export default function About() {
  return (
    <div className="about">
      <h1 className="text-center">About Me</h1>
      <img className="profileImage" src={profilePic} alt="Profile Image"></img>
      <p>
        My name is Lachlan, a 26 year old male who is currently
        studying to become a software engineer. I am currently undertaking
        a bootcamp to help not only refreshen my skills, but to gain more
        knowledge about the field and help build up a portfolio.
      </p>
      <p>
        More about me on a personal note. I have been with my lovely girlfriend
        for just over a year and a half now. I enjoy playing video games,
        with friends is best but also enjoy some single player games here and there.
        I really love anime and have been watching since back in 2010. I am currently
        living at home with my parents, brother and sister, along with our 2 cats.
      </p>
    </div>
  );
}
