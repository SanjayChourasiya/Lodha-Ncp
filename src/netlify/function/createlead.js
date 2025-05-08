const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const { name, email, phone } = event.queryStringParameters;

    const crmUrl = `https://valueproperties.tranquilcrmone.in/v1/createlead?` +
      new URLSearchParams({
        api_key: "TRNQUILCRMvalueproperties",
        country_code: "91",
        mobile_number: phone,
        project_id: "1",
        source_type: "2",
        customer_name: name,
        email: email,
        sub_source: "Website",
        remark: "From Netlify",
        campaign_name: "Netlify Campaign",
        adgroup_name: "Netlify Group",
        ad_name: "Netlify Ad",
        spi: "Netlify SPI",
        location: "Mumbai",
        requirment_type: "residential",
        property_type: "sale",
        configuration: "2BHK"
      }).toString();

    const response = await fetch(crmUrl, {
      method: "GET"
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
