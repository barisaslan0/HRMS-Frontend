import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import { Dropdown, Header } from "semantic-ui-react";

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const cityOptions=cities.map((city)=>({
    key:city.cityId,
    text:city.name,
    value:city.name
  }))

  return (
    <div>
      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şehirler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cities.map((city) => (
            <Table.Row key={city.cityId}>
              <Table.Cell>{city.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}

      <Header textAlign="left">Şehir</Header>
      <Dropdown placeholder="Şehir Seç" fluid multiple search selection options={cityOptions} />

    </div>
  );
}
