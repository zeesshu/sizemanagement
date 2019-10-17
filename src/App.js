import React from "react";
import ReactDOM from "react-dom";
import DefaultBrands from "./modules/DefaultBrands";

const default_brands = {
    "data": {
        "getBrands": {
            "brandList": {
                "brand": [{
                        "brandAttributes": {
                            "brandIdentifier": 1,
                            "brandDescription": "MR COFFEE",
                            "brandShortDescription": "MRCOF",
                            "priceTier": {
                                "referenceValueDescription": "GOOD"
                            },
                            "lifestyle": {
                                "referenceValueDescription": "CLASSIC"
                            },
                            "brandTypeCode": "R"
                        }
                    },
                    {
                        "brandAttributes": {
                            "brandIdentifier": 2,
                            "brandDescription": "HAMILTON BEACH",
                            "brandShortDescription": null,
                            "priceTier": {
                                "referenceValueDescription": "GOOD"
                            },
                            "lifestyle": {
                                "referenceValueDescription": "CLASSIC"
                            },
                            "brandTypeCode": "R"
                        }
                    },
                    {
                        "brandAttributes": {
                            "brandIdentifier": 3,
                            "brandDescription": "PROCTOR-SILEX",
                            "brandShortDescription": null,
                            "priceTier": {
                                "referenceValueDescription": "GOOD"
                            },
                            "lifestyle": {
                                "referenceValueDescription": "CLASSIC"
                            },
                            "brandTypeCode": "R"
                        }
                    }
                ]
            }
        }
    }
};
const App = () => {
  return (
    <section className="container">
      <DefaultBrands brands = {default_brands}></DefaultBrands>
    </section>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));