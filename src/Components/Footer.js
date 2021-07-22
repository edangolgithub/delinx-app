import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./style.css";
export class Footer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="dfooter">
        <div className="container-fluid dcontainer">
          <div className="dflex">
            <div className="">
              <h6>Contacts</h6>
              <ul>
                <li>+32 543 543 66 73 67</li>
                <li>+32 313 543 21 73 67</li>
                <li>info@spacex.com</li>
              </ul>
            </div>
            <div className="">
              <h6>Contacts</h6>
              <ul>
                <li>+32 543 543 66 73 67</li>
                <li>+32 313 543 21 73 67</li>
                <li>info@spacex.com</li>
              </ul>
            </div>
            <div className="">
              <h6>Contacts</h6>
              <ul>
                <li>+32 543 543 66 73 67</li>
                <li>+32 313 543 21 73 67</li>
                <li>info@spacex.com</li>
              </ul>
            </div>
            <div className="">
              <h6>Contacts</h6>
              <ul>
                <li>+32 543 543 66 73 67</li>
                <li>+32 313 543 21 73 67</li>
                <li>info@spacex.com</li>
              </ul>
            </div>

            <div className="col updatesdiv">
              <h6>GET UPDATES</h6>
              <p className="text-subscribe">
                Subscribe and get updates about our space launches and
                everything around spaceX
              </p>
              <InputGroup className="mt-5">
                <FormControl
                  placeholder="example@impact.org"
                  aria-label="example@impact.org"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text className="btn-primary" id="basic-addon2">
                  OK
                </InputGroup.Text>
              </InputGroup>
            </div>
          </div>
          <div className="row scdrow">
            <div className="col ">
              <p>&copy;2019 SPACE EXPLORATIONTECHNOLOGIES CROP </p>
            </div>
            <div className="col">
              <img src="/media/SpaceX-Logo.svg" alt="Space X SVG" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
