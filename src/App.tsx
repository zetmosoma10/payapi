import Button from "./components/Button";

function App() {
  return (
    <div className="w-[800px] bg-mirage_blue">
      <Button classNames="btn-primary">Button</Button>
      <Button type="link" classNames="btn-primary">
        Button
      </Button>
      <Button type="link" classNames="btn-secondary">
        About
      </Button>
    </div>
  );
}

export default App;
