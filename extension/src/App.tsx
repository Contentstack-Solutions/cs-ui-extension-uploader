import { Button, EmptyState } from "@contentstack/venus-components";

import ContentstackUIExtension from "@contentstack/ui-extensions-sdk";
import React from "react";

const MockHeading = () => {
  return <>This is a UI eXtension!</>;
};
const MockDescription = () => {
  return (
    <>
      <div>You are ready to implement your own logic.</div>
      <Button className="mt-10" buttonType="link" href="https://github.com/contentstack/extensions">
        Learn More
      </Button>
    </>
  );
};

function App() {
  const [error, setError] = React.useState<any>(null);
  const [extension, setExtension] = React.useState<any>(null);

  React.useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (self === top) {
      setError({ message: "This extension can only be used in Contentstack" });
    } else {
      ContentstackUIExtension.init().then((extension: any) => {
        console.log("Extension Loaded!", extension);
        setExtension(extension);
      });
    }
  }, []);

  return <EmptyState heading={<MockHeading />} description={<MockDescription />} />;
}

export default App;