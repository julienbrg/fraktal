import React from "react";
import { LoaderIcon } from "../assets/images";

export default props => (
  <div>
    <img src={LoaderIcon} width={20} height={20} class="img-fluid" alt="Loading"/>
    The execution is in progress. This usually takes between about 3 minutes.
  </div>
);
