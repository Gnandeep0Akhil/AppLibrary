import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

function Currency() {
  const codes = [
    {
      label: "AED",
      value: "AED",
    },
    {
      label: "AFN",
      value: "AFN",
    },
    {
      label: "ALL",
      value: "ALL",
    },
    {
      label: "AMD",
      value: "AMD",
    },
    {
      label: "ANG",
      value: "ANG",
    },
    {
      label: "AOA",
      value: "AOA",
    },
    {
      label: "ARS",
      value: "ARS",
    },
    {
      label: "AUD",
      value: "AUD",
    },
    {
      label: "AWG",
      value: "AWG",
    },
    {
      label: "AZN",
      value: "AZN",
    },
    {
      label: "BAM",
      value: "BAM",
    },
    {
      label: "BBD",
      value: "BBD",
    },
    {
      label: "BDT",
      value: "BDT",
    },
    {
      label: "BGN",
      value: "BGN",
    },
    {
      label: "BHD",
      value: "BHD",
    },
    {
      label: "BIF",
      value: "BIF",
    },
    {
      label: "BMD",
      value: "BMD",
    },
    {
      label: "BND",
      value: "BND",
    },
    {
      label: "BOB",
      value: "BOB",
    },
    {
      label: "BRL",
      value: "BRL",
    },
    {
      label: "BSD",
      value: "BSD",
    },
    {
      label: "BTC",
      value: "BTC",
    },
    {
      label: "BTN",
      value: "BTN",
    },
    {
      label: "BWP",
      value: "BWP",
    },
    {
      label: "BYN",
      value: "BYN",
    },
    {
      label: "BYR",
      value: "BYR",
    },
    {
      label: "BZD",
      value: "BZD",
    },
    {
      label: "CAD",
      value: "CAD",
    },
    {
      label: "CDF",
      value: "CDF",
    },
    {
      label: "CHF",
      value: "CHF",
    },
    {
      label: "CLF",
      value: "CLF",
    },
    {
      label: "CLP",
      value: "CLP",
    },
    {
      label: "CNY",
      value: "CNY",
    },
    {
      label: "COP",
      value: "COP",
    },
    {
      label: "CRC",
      value: "CRC",
    },
    {
      label: "CUC",
      value: "CUC",
    },
    {
      label: "CUP",
      value: "CUP",
    },
    {
      label: "CVE",
      value: "CVE",
    },
    {
      label: "CZK",
      value: "CZK",
    },
    {
      label: "DJF",
      value: "DJF",
    },
    {
      label: "DKK",
      value: "DKK",
    },
    {
      label: "DOP",
      value: "DOP",
    },
    {
      label: "DZD",
      value: "DZD",
    },
    {
      label: "EGP",
      value: "EGP",
    },
    {
      label: "ERN",
      value: "ERN",
    },
    {
      label: "ETB",
      value: "ETB",
    },
    {
      label: "EUR",
      value: "EUR",
    },
    {
      label: "FJD",
      value: "FJD",
    },
    {
      label: "FKP",
      value: "FKP",
    },
    {
      label: "GBP",
      value: "GBP",
    },
    {
      label: "GEL",
      value: "GEL",
    },
    {
      label: "GGP",
      value: "GGP",
    },
    {
      label: "GHS",
      value: "GHS",
    },
    {
      label: "GIP",
      value: "GIP",
    },
    {
      label: "GMD",
      value: "GMD",
    },
    {
      label: "GNF",
      value: "GNF",
    },
    {
      label: "GTQ",
      value: "GTQ",
    },
    {
      label: "GYD",
      value: "GYD",
    },
    {
      label: "HKD",
      value: "HKD",
    },
    {
      label: "HNL",
      value: "HNL",
    },
    {
      label: "HRK",
      value: "HRK",
    },
    {
      label: "HTG",
      value: "HTG",
    },
    {
      label: "HUF",
      value: "HUF",
    },
    {
      label: "IDR",
      value: "IDR",
    },
    {
      label: "ILS",
      value: "ILS",
    },
    {
      label: "IMP",
      value: "IMP",
    },
    {
      label: "INR",
      value: "INR",
    },
    {
      label: "IQD",
      value: "IQD",
    },
    {
      label: "IRR",
      value: "IRR",
    },
    {
      label: "ISK",
      value: "ISK",
    },
    {
      label: "JEP",
      value: "JEP",
    },
    {
      label: "JMD",
      value: "JMD",
    },
    {
      label: "JOD",
      value: "JOD",
    },
    {
      label: "JPY",
      value: "JPY",
    },
    {
      label: "KES",
      value: "KES",
    },
    {
      label: "KGS",
      value: "KGS",
    },
    {
      label: "KHR",
      value: "KHR",
    },
    {
      label: "KMF",
      value: "KMF",
    },
    {
      label: "KPW",
      value: "KPW",
    },
    {
      label: "KRW",
      value: "KRW",
    },
    {
      label: "KWD",
      value: "KWD",
    },
    {
      label: "KYD",
      value: "KYD",
    },
    {
      label: "KZT",
      value: "KZT",
    },
    {
      label: "LAK",
      value: "LAK",
    },
    {
      label: "LBP",
      value: "LBP",
    },
    {
      label: "LKR",
      value: "LKR",
    },
    {
      label: "LRD",
      value: "LRD",
    },
    {
      label: "LSL",
      value: "LSL",
    },
    {
      label: "LTL",
      value: "LTL",
    },
    {
      label: "LVL",
      value: "LVL",
    },
    {
      label: "LYD",
      value: "LYD",
    },
    {
      label: "MAD",
      value: "MAD",
    },
    {
      label: "MDL",
      value: "MDL",
    },
    {
      label: "MGA",
      value: "MGA",
    },
    {
      label: "MKD",
      value: "MKD",
    },
    {
      label: "MMK",
      value: "MMK",
    },
    {
      label: "MNT",
      value: "MNT",
    },
    {
      label: "MOP",
      value: "MOP",
    },
    {
      label: "MRO",
      value: "MRO",
    },
    {
      label: "MUR",
      value: "MUR",
    },
    {
      label: "MVR",
      value: "MVR",
    },
    {
      label: "MWK",
      value: "MWK",
    },
    {
      label: "MXN",
      value: "MXN",
    },
    {
      label: "MYR",
      value: "MYR",
    },
    {
      label: "MZN",
      value: "MZN",
    },
    {
      label: "NAD",
      value: "NAD",
    },
    {
      label: "NGN",
      value: "NGN",
    },
    {
      label: "NIO",
      value: "NIO",
    },
    {
      label: "NOK",
      value: "NOK",
    },
    {
      label: "NPR",
      value: "NPR",
    },
    {
      label: "NZD",
      value: "NZD",
    },
    {
      label: "OMR",
      value: "OMR",
    },
    {
      label: "PAB",
      value: "PAB",
    },
    {
      label: "PEN",
      value: "PEN",
    },
    {
      label: "PGK",
      value: "PGK",
    },
    {
      label: "PHP",
      value: "PHP",
    },
    {
      label: "PKR",
      value: "PKR",
    },
    {
      label: "PLN",
      value: "PLN",
    },
    {
      label: "PYG",
      value: "PYG",
    },
    {
      label: "QAR",
      value: "QAR",
    },
    {
      label: "RON",
      value: "RON",
    },
    {
      label: "RSD",
      value: "RSD",
    },
    {
      label: "RUB",
      value: "RUB",
    },
    {
      label: "RWF",
      value: "RWF",
    },
    {
      label: "SAR",
      value: "SAR",
    },
    {
      label: "SBD",
      value: "SBD",
    },
    {
      label: "SCR",
      value: "SCR",
    },
    {
      label: "SDG",
      value: "SDG",
    },
    {
      label: "SEK",
      value: "SEK",
    },
    {
      label: "SGD",
      value: "SGD",
    },
    {
      label: "SHP",
      value: "SHP",
    },
    {
      label: "SLL",
      value: "SLL",
    },
    {
      label: "SOS",
      value: "SOS",
    },
    {
      label: "SRD",
      value: "SRD",
    },
    {
      label: "STD",
      value: "STD",
    },
    {
      label: "SVC",
      value: "SVC",
    },
    {
      label: "SYP",
      value: "SYP",
    },
    {
      label: "SZL",
      value: "SZL",
    },
    {
      label: "THB",
      value: "THB",
    },
    {
      label: "TJS",
      value: "TJS",
    },
    {
      label: "TMT",
      value: "TMT",
    },
    {
      label: "TND",
      value: "TND",
    },
    {
      label: "TOP",
      value: "TOP",
    },
    {
      label: "TRY",
      value: "TRY",
    },
    {
      label: "TTD",
      value: "TTD",
    },
    {
      label: "TWD",
      value: "TWD",
    },
    {
      label: "TZS",
      value: "TZS",
    },
    {
      label: "UAH",
      value: "UAH",
    },
    {
      label: "UGX",
      value: "UGX",
    },
    {
      label: "USD",
      value: "USD",
    },
    {
      label: "UYU",
      value: "UYU",
    },
    {
      label: "UZS",
      value: "UZS",
    },
    {
      label: "VEF",
      value: "VEF",
    },
    {
      label: "VND",
      value: "VND",
    },
    {
      label: "VUV",
      value: "VUV",
    },
    {
      label: "WST",
      value: "WST",
    },
    {
      label: "XAF",
      value: "XAF",
    },
    {
      label: "XAG",
      value: "XAG",
    },
    {
      label: "XAU",
      value: "XAU",
    },
    {
      label: "XCD",
      value: "XCD",
    },
    {
      label: "XDR",
      value: "XDR",
    },
    {
      label: "XOF",
      value: "XOF",
    },
    {
      label: "XPF",
      value: "XPF",
    },
    {
      label: "YER",
      value: "YER",
    },
    {
      label: "ZAR",
      value: "ZAR",
    },
    {
      label: "ZMK",
      value: "ZMK",
    },
    {
      label: "ZMW",
      value: "ZMW",
    },
    {
      label: "ZWL",
      value: "ZWL",
    },
  ];
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const convert = () => {
    const val = !!fromValue || !!toValue;
    if (!!from && !!to && val) {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "sGNPMICZy0WGgT0jv4a1gi6UvFCkDlh1");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        `https://api.apilayer.com/currency_data/convert?to=${
          !!fromValue ? to.value : from.value
        }&from=${!!fromValue ? from.value : to.value}&amount=${
          !!fromValue ? fromValue : toValue
        }`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          if (!!fromValue) {
            setToValue(JSON.parse(result).result);
          } else {
            setFromValue(JSON.parse(result).result);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      toast.error("Please enter currency codes and value to convert.");
    }
  };

  const styles = {
    option: (provided) => ({
      ...provided,
      color: "rgb(85, 85, 85)",
      fontFamily: "Cherry Bomb !important",
      letterSpacing: "5px",
      padding: "5px 10px",
      fontSize: "18px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgb(190,65,65)",
      fontFamily: "Cherry Bomb !important",
      letterSpacing: "5px",
      padding: "5px 10px",
      fontSize: "18px",
    }),
  };

  return (
    <div className="CurrencyMain">
      <div className="arena">
        <div class="CurrencyDesc">
          <div>Currency</div>
          <div>Converter</div>
        </div>
        <div className="CurrencyInfo">
          <div className="curry">
            <Select
              myFontSize="30px"
              options={codes}
              value={from}
              onChange={(option) => {
                setFrom(option);
              }}
              styles={styles}
              name="fromSelect"
            />
            <input
              type="number"
              name="from"
              className="valueInput"
              value={fromValue}
              disabled={!!!from}
              onChange={(e) => {
                setFromValue(e.target.value);
              }}
              placeholder="Amount..."
            />
          </div>
          <div className="convert">
            <i
              class="fas fa-sync-alt"
              style={{ fontSize: "50px", color: "rgb(222,222,222)" }}
              onClick={() => convert()}
            ></i>
          </div>
          <div className="curry">
            <Select
              myFontSize="30px"
              options={codes}
              value={to}
              onChange={(option) => {
                setTo(option);
              }}
              styles={styles}
              name="toSelect"
            />
            <input
              type="number"
              name="to"
              className="valueInput"
              disabled={!!!to}
              value={toValue}
              onChange={(e) => {
                setToValue(e.target.value);
              }}
              placeholder="Amount..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
