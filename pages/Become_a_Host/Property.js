import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import { Security,StdAmenities, SafetyItems, GuestFavrt } from "../../components/utils/constants";

export default class Property extends Component {
    state = {
        step: 1,
        category: "",
        description: "",
        address: "",
        guests: 0,
        beds: 0,
        bathrooms: 0,
        security: new Array(Security.length).fill(false),
        stdAmenities: new Array(StdAmenities.length).fill(false),
        guestFvrt: new Array(GuestFavrt.length).fill(false),
        safetyItems: new Array(SafetyItems.length).fill(false),
        propertyImages: "",
        propTitle: "",
        propPrice: "",
        propDescription: "",
        propDocs: "",
    };

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    // Handle fields change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
        console.log(input);
    };

    //increase counter
    increaseGuests = () => {
        this.setState({
            guests: this.state.guests + 1,
        });
    };

    //decrease counter
    decreaseGuests = () => {
        this.setState({
            guests: this.state.guests - 1,
        });
    };

    // Increase beds counter
    increaseBeds = () => {
        this.setState({
            beds: this.state.beds + 1,
        });
    };

    // Decrease Beds Counter
    decreaseBeds = () => {
        this.setState({
            beds: this.state.beds - 1,
        });
    };

    // Increase Bathrooms counter
    increaseBathrooms = () => {
        this.setState({
            bathrooms: this.state.bathrooms + 1,
        });
    };

    decreaseBathrooms = () => {
        this.setState({
            bathrooms: this.state.bathrooms - 1,
        });
    };

    handleSecurity = (position) => {
        const updatedCheckedState = this.state.security.map((item, index) => 
            index === position ? !item : item
            );
        this.setState({
            security: updatedCheckedState,
        });
        console.log("this is security", updatedCheckedState);
    };

    handleStdAmenities = (position) =>{
        console.log("this is standout amenity", this.state.stdAmenities);
        const updatedCheckedState = this.state.stdAmenities.map((item,index)=>
            index === position ? !item : item
        );
        this.setState({
            stdAmenities: updatedCheckedState,
        });
        console.log("this is standout amenity", updatedCheckedState);
    }

    handleGuestFvrt = (position) =>{
        console.log("this is guest favourite", this.state.guestFvrt);
        const updatedCheckedState = this.state.guestFvrt.map((item,index)=>
            index === position ? !item : item
        );
        this.setState({
            guestFvrt: updatedCheckedState,
        });
        console.log("this is guest favourite", updatedCheckedState);
    }

    handleSafetyItems = (position) =>{
        console.log("this is safety item", this.state.safetyItems);
        const updatedCheckedState = this.state.safetyItems.map((item,index)=>
            index === position ? !item : item
        );
        this.setState({
            safetyItems: updatedCheckedState,
        });
        console.log("this is safety item", updatedCheckedState);
    }


    componentDidMount() {
        console.log("this is state", this.state);
    }

    render() {
        const { step } = this.state;
        const {
            category,
            description,
            address,
            guests,
            beds,
            bathrooms,
            security,
            stdAmenities,
            guestFvrt,
            safetyItems,
            propertyImages,
            propTitle,
            propPrice,
            propDescription,
            propDocs,
        } = this.state;
        const values = {
            category,
            description,
            address,
            guests,
            beds,
            bathrooms,
            security,
            stdAmenities,
            guestFvrt,
            safetyItems,
            propertyImages,
            propTitle,
            propPrice,
            propDescription,
            propDocs,
        };
        switch (step) {
            case 1:
                return (
                    <Step1
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Step2
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Step3
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Step4
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        increaseGuests={this.increaseGuests}
                        decreaseGuests={this.decreaseGuests}
                        increaseBeds={this.increaseBeds}
                        decreaseBeds={this.decreaseBeds}
                        increaseBathrooms={this.increaseBathrooms}
                        decreaseBathrooms={this.decreaseBathrooms}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Step5
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        Security={Security}
                        handleSecurity={this.handleSecurity}
                    />
                );
            case 6:
                return (
                    <Step6
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        StdAmenities={StdAmenities}
                        handleStdAmenities={this.handleStdAmenities}
                        GuestFavrt={GuestFavrt}
                        handleGuestFvrt={this.handleGuestFvrt}
                        SafetyItems={SafetyItems}
                        handleSafetyItems={this.handleSafetyItems}
                        values={values}
                    />
                );
            case 7:
                return (
                    <Step7
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 8:
                return (
                    <Step8
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 9:
                return (
                    <Step9
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 10:
                return (
                    <Step10
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                );
            default:
            // do nothing
        }
    }
}