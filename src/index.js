import "./css/style.css";
import "./css/csstoggle.css";
import { baseRender, cards } from "./app/dom"
import { getWeather } from "./app/fetch"
import { parseISO, parse } from 'date-fns'
import { listeners } from "./app/events"
import { cities } from "./app/storage"
baseRender()



