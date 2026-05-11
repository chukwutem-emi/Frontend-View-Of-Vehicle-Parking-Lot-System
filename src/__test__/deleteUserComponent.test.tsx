import {render, screen} from "@testing-library/react";
import {DeleteUser} from "../features/auth/components/DeleteUser";
import "@testing-library/jest-dom";
import {} from "../components/Loader"

jest.mock("../components/Modal/Dialog", () => ({
    Dialog : () => <div>Delete user dialog</div>
}));
jest.mock("../components/Modal/ResponseDialog", () => ({
    ResponseDialog: () => <div>Response dialog</div>
}));
jest.mock("../components/Loader", () => ({
    Loader: () => <div>Loader</div>
}));
describe("DeleteUser component", () => {
    test("Render DeleteUser UI", () => {
        
        render(
            <DeleteUser 
                errMessage={false}
                handleCancel={jest.fn()}
                handleConfirm={jest.fn()}
                handleDivCancel={jest.fn()}
                handleDivClick={jest.fn()}
                handleOnclick={jest.fn()}
                isOpen={false}
                message=""
                open={false}
                openMessage={false}
                progress={0}
            />
        );
        expect(screen.getByText(/delete user dialog/i)).toBeInTheDocument()
    });
});