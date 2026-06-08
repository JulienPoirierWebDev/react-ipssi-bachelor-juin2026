import styles from "./Features.module.css";

const Features = () => {
  const features = [
    { title: "🎨 Creative", content: "Passionate about design and creativity" },
    { title: "💻 Developer", content: "Building projects and learning new skills" },
    { title: "📚 Learner", content: "Always exploring and growing" },
  ];
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((oneFeature) => (
          <div key={oneFeature.title} className={styles.box}>
            <h3>{oneFeature.title}</h3>
            <p>{oneFeature.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
