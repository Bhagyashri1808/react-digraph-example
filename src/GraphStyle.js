import { css } from "@emotion/css";

export const GraphStyles = css`
  display: flex;
  flex-direction: row;
  height: 100vh;
  .sidePanel {
    display: flex;
    flex-direction: column;
    width: 30%;
    color: #fff;
    background: #2a2c37;
    border-radius: 6px;
    padding: 15px;

    &-Button {
      border: 2px solid #50fa7b;
      color: #50fa7b;
      background: none;
      padding: 10px 15px;
      border-radius: 6px;
      outline: 0;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
      margin: 5px;
    }
    &-Input {
      width: auto;
      border: 1px solid transparent;
      color: #fff;
      background: #1d1e26;
      padding: 10px 15px;
      margin-bottom: 5px;
      border-radius: 6px;
      outline: 0;
      margin: 5px;
      &:focus {
        border-color: #50fa7b;
      }
    }
  }
`;
