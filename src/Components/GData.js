import React from "react";
import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
const FILMS_QUERY = gql`
  {
    launchesPast {
      id
      details
      links {
        wikipedia
        mission_patch_small
      }
      launch_year
      rocket {
        rocket_name
      }
    }
  }
`;

// const idSort = function (x, y) {
//   console.log(parseInt(y.id) - parseInt(x.id));
//   return parseInt(x.id) - parseInt(y.id);
// };

export default function GData() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  var duplicate = data.launchesPast
    .slice()
    .sort((x, y) => Number(x.id) - Number(y.id));

  var filteredLaunches = duplicate.filter(
    (x) => x.details !== null && x.details.length <= 300
  );
  filteredLaunches.splice(8);
  console.log(filteredLaunches);
  return (
    <div className="container d-flex flex-wrap">
      {filteredLaunches.map((launch) => (
        <Card
          className="col-3 carddiv"
          key={launch.id}
          style={{ width: "19em" }}
        >
          <Card.Img variant="top" src={launch.links.mission_patch_small} />
          <Card.Body>
            <Card.Title>
              <span className="titlespan missonspan"> Mission {launch.id}</span>
              <span className="titlespan"> {launch.launch_year}</span>
              <span className="xspan"> {launch.rocket.rocket_name}</span>
            </Card.Title>
            <Card.Text>
              <span className="maintext">{launch.details.substr(0, 105)}</span>
            </Card.Text>

            <div className="bottom">
              <Button className=" text-decoration-none" variant="link">
                <i className="material-icons icon_rt">arrow_right</i> Go to
                wikipedia page
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
