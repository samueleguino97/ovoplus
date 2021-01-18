function joinClasses(...classNames: (string | object)[]): string {
  const mappedClasses = classNames.map((className) =>
    typeof className === "object"
      ? Object.keys(className)
          .map((classNameKey) => (className[classNameKey] ? classNameKey : ""))
          .join(" ")
      : className
  );

  return mappedClasses.join(" ");
}

export default joinClasses;
