"use client";

import { useState } from "react";

export const Json = ({
  cookieUser,
  legendText,
}: {
  cookieUser: Record<string, any>;
  legendText: string;
}) => {
  const [stateUser] = useState(cookieUser);

  return (
    <fieldset className="rounded-sm border-2 p-2 text-xs">
      <legend className="px-2 font-semibold">{legendText}</legend>
      <pre>{JSON.stringify({ cookieUser, stateUser }, null, 2)}</pre>
    </fieldset>
  );
};
