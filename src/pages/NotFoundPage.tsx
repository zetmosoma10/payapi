import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className=" bg-background_color min-h-screen flex items-center justify-center text-center">
      <div>
        <small className="text-dark_pink font-bold">404</small>
        <h1 className="mt-1 mb-3 text-san_juan_blue font-medium text-4xl">
          Page Not Found
        </h1>
        <p className="mb-3 text-base text-light_san_juan_blue">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div>
          <Button type="link" to="/" classNames="btn-primary px-8">
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
