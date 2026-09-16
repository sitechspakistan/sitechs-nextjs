import Hero from "./Hero";
import StartProjectForm from "./StartProjectForm";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "Start a Project | Sitechs",
  description:
    "One form, two minutes. Tell us what is not working and get a real reply from the person who would run the work.",
};

export default function StartAProjectPage() {
  return (
    <main className="svc-page">
      <Hero />
      <div id="form" className="sap-form-section theme-light">
        <div className="sap-form-section__inner">
          <StartProjectForm />
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
