import styled from "styled-components";

export const Container = styled.div`

    position: absolute;
    top: 2.4rem;
    left: 2.4rem;
    display: flex;
    flex-direction: column;

   
}`;

export const Item = styled.button`

        display: flex;
        align-items: center;
        justify-content: center;
        width: 6.4rem;
        height: 6.4rem;
        border: 0.4rem solid rgba(0, 74, 69, 1);
        border-radius: 12.8rem;
        font-size: 4rem;
        font-weight: bold;
        color: rgba(0, 74, 69, 1);
        cursor: pointer;
        transition: all .2s;
        background-color: ${(props) =>
          props.src ? "#fff" : "rgba(0, 214, 143, 1)"};
        background-image: url(${(props) => props.src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom:20px;

        &:hover {
            background-color: rgba(0, 74, 69, 1);
            color: rgba(0, 214, 143, 1);
        }

    }
`;
