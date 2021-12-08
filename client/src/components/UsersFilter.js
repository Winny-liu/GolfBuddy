import React, {useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import FilterBar from "./components/FilterBar";


const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function UsersFilter  () {


    const [data, setData] = useState(data);

    
    const generateGenderData = () => {
        return [...new Set(users.map((item) => item.gender))]
    }

    const handleFilterName = (name) => {
        const filteredData = users.filter((item) => {
            const name = `${item.name}`;
            if (item.toLowerCase().includes(name.toLowerCase())) {
                return item;
            }
        });

        setData(filteredData);
    }

    const handleFilterEmail = (email) => {
        const filteredData = users.filter((item) => {
            if (item.email.toLowerCase().includes(email.toLowerCase())) {
                return item;
            }
           
        });

        setData(filteredData);
    }

    const handleFilterGender = (gender) => {
        const filteredData = users.filter((item) => {
            if (item.gender===gender) {
                return item;
            }
           
        });

        setData(filteredData);
    }

    const handleFilterHandicap = (handicap) => {
        const filteredData = users.filter((item) => {
            if (item.handicap===handicap) {
                return item;
            }
           
        });

        setData(filteredData);
    }

    const handleFilterDate = (date, field) => {
        const filteredData = users.filter((item) => {
            if (field === "from" && dayjs(item.data).isSameOrAfter(dayjs(data))) {
                return item;
            }
           else if (field === "to" && dayjs(item.data).isSameOrbefore(dayjs(data))) {
                return item;
            }
           
        });

        setData(filteredData);
    }

    return (
        <Container>
            <FilterBar
                genders={generateGenderData()}
                onNameFilter={handleFilterName}
                onEmailFilter={handleFilterEmail}
                onGenderFilter={handleFilterGender}
                onHandicapFilter={handleFilterHandicap}
                onDateFilter={handleFilterDate}
                />


        </Container>
    )

    }
  

export default UsersFilter;