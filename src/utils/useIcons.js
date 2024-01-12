import { MdCheckCircle } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { BsCircleHalf } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiBatteryWarningVerticalFill } from "react-icons/pi";
import { MdSignalCellular4Bar } from "react-icons/md";
import { MdSignalCellular2Bar } from "react-icons/md";
import { MdSignalCellular1Bar } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const useIcons = (status) => {
  const icons = [
    <FaRegCircle style={{ color: "#475569" }} />,
    <BsCircleHalf style={{ color: "#F1CA4A" }} />,
    <MdCheckCircle style={{ color: "#5A66D1" }} />,
    <MdCancel style={{ color: "#94A2B3" }} />,
    <HiDotsHorizontal style={{ color: "#475569" }} />,
    <PiBatteryWarningVerticalFill style={{ color: "#FC7740" }} />,
    <MdSignalCellular4Bar style={{ color: "green" }} />,
    <MdSignalCellular2Bar style={{ color: "blue" }} />,
    <MdSignalCellular1Bar style={{ color: "red" }} />,
    <FaUserCircle />,
  ];
  let icon;
  if (status == "Todo") {
    icon = icons[0];
  } else if (status == "In progress") {
    icon = icons[1];
  } else if (status == "Done") {
    icon = icons[2];
  } else if (status == "Cancel") {
    icon = icons[3];
  } else if (status == "No priority") {
    icon = icons[4];
  } else if (status == "Urgent") {
    icon = icons[5];
  } else if (status == "High") {
    icon = icons[6];
  } else if (status == "Medium") {
    icon = icons[7];
  } else if (status == "Low") {
    icon = icons[8];
  } else {
    icon = icons[9];
  }

  return icon;
};

export default useIcons;
