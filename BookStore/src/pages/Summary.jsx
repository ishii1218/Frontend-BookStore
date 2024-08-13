import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { UsersIcon, BookOpenIcon, StarIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import CardStats from "../components/Cards/CardStats";
import axios from 'axios';
import { useEffect, useState } from 'react';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Line Chart Configuration
// const lineChartConfig = {
//   type: "line",
//   height: 240,
//   series: [
//     {
//       name: "Users Over Time",
//       data: [50, 100, 150, 200, 250, 300, 350, 400, 450],
//     },
//   ],
//   options: {
//     chart: {
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#534ee6"],
//     stroke: {
//       lineCap: "round",
//       curve: "smooth",
//     },
//     markers: {
//       size: 0,
//     },
//     xaxis: {
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//     },
//     grid: {
//       show: true,
//       borderColor: "#dddddd",
//       strokeDashArray: 5,
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 5,
//         right: 20,
//       },
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   },
// };

// // Pie Chart Configuration
// const pieChartConfig = {
//   type: "pie",
//   width: 280,
//   height: 280,
//   series: [30, 25, 20, 15, 10],
//   options: {
//     chart: {
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#d68a85", "#abd685", "#85d6cf", "#8595d6", "#cd84d1"],
//     legend: {
//       show: false,
//     },
//     labels: ["Fiction", "Non-Fiction", "Science", "History", "Fantasy"],
//   },
// };

const Summary = () => {
  const [userData, setUserData] = useState({ series: [], categories: [] });
  const [genreData, setGenreData] = useState({ series: [], labels: [] });

  useEffect(() => {
    // Fetch user data for line chart
    const fetch = async () => {
    axios.get(`${backendUrl}/users-by-month`).then((response) => {
      setUserData({
        series: [{ name: 'Users', data: response.data.userCountsByMonth }],
        categories: response.data.months,
      });
    });

    // Fetch genre data for pie chart
    axios.get(`${backendUrl}/getBooksByGenre`).then((response) => {
      setGenreData({
        series: response.data.counts,
        labels: response.data.labels,
      });
    });
  };
  fetch();
  }, []);

  const lineChartConfig = {
    type: "line",
    height: 240,
    series: userData.series,
    options: {
      chart: {
        toolbar: { show: false },
      },
      xaxis: {
        categories: userData.categories,
        labels: { style: { colors: "#616161", fontSize: "12px" } },
      },
      colors: ["#534ee6"],
      stroke: { lineCap: "round", curve: "smooth" },
    },
  };

  const pieChartConfig = {
    type: "pie",
    width: 360,
    height: 360,
    series: genreData.series,
    options: {
      chart: { toolbar: { show: false } },
      labels: genreData.labels,
      colors: ["#d68a85", "#abd685", "#85d6cf", "#8595d6", "#cd84d1"],
    },
  };



  return (
  <>
  <div className="relative pb-10 ">
        <div className="mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats
                  statSubtitle="TOTAL USERS"
                  statTitle="1,234"
                  statArrow="up"
                  statPercent="5"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="UsersIcon"
                  statIconColor="bg-blue-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats
                  statSubtitle="TOTAL BOOKS"
                  statTitle="567"
                  statArrow="up"
                  statPercent="2.1"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="BookOpenIcon"
                  statIconColor="bg-green-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats
                  statSubtitle="FAVORITE BOOKS"
                  statTitle="128"
                  statArrow="up"
                  statPercent="1.5"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIconName="StarIcon"
                  statIconColor="bg-yellow-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats
                  statSubtitle="PREMIUM USERS"
                  statTitle="89"
                  statArrow="up"
                  statPercent="10"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="BadgeCheckIcon"
                  statIconColor="bg-purple-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 pr-4 pt-0">
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-green-100 p-5 text-green-900">
            <UsersIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Users Over Time
            </Typography>
            {/* <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              Track the growth of users on your platform
            </Typography> */}
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...lineChartConfig} />
        </CardBody>
      </Card>

      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-green-100 p-5 text-green-900">
            <BookOpenIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Books by Genre
            </Typography>
            {/* <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              See the distribution of books across different genres
            </Typography> */}
          </div>
        </CardHeader>
        <CardBody className="mt-0 grid place-items-center px-2">
          <Chart {...pieChartConfig} />
        </CardBody>
      </Card>
    </div>
  </>
  );
};

export default Summary;
