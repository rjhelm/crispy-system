import { useEffect } from "react";
import Chart from 'chart.js/auto';
import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import { getAdminProducts } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from ''