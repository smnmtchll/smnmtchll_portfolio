import { Navbar, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';

const Header = () => {
  const popover = (
    <Popover id="photography-popover">
      <Popover.Title as="h3">IMAGE — JACK HOYLE</Popover.Title>
      <Popover.Content as="p">
        Click for to view more great photography from Jack.
      </Popover.Content>
    </Popover>
  );
  return (
    <Navbar bg="none" variant="dark" fixed="bottom">
      <OverlayTrigger
        placement="right"
        delay={{ show: 0, hide: 400 }}
        overlay={popover}
      >
        <a href="http://www.jackhoylephotography.com/" target="_blank">
          <img src="./img/camera.png" width="24"></img>
        </a>
      </OverlayTrigger>
      <style global jsx>{`
        .popover {
          min-width: 320px;
          opacity: 0.7;
        }
        .popover h3 {
          font-size: 0.8rem !important;
          background: #555c5a;
          color: #fff;
        }
        .popover p {
          font-size: 0.8rem !important;
          padding-bottom: 0;
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
