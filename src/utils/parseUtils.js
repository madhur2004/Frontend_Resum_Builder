export const parseLineData = (rawData) => {
  if (!rawData) return [];
  if (Array.isArray(rawData)) return rawData;

  return rawData
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((str) => {
      const [left, link] = str.split(",");
      const [name, description] = left.split(":-");

      return {
        name: name?.trim(),
        description: description?.trim(),
        link: link?.trim()?.startsWith("http")
          ? link.trim()
          : `https://${link?.trim()}`,
      };
    });
};

export const parseInternships = (rawData) => {
  if (!rawData || typeof rawData !== "string") return [];

  return rawData
    .split("|")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((item) => {
      const [company, role, description] = item.split(",");
      return {
        company: company?.trim(),
        role: role?.trim(),
        description: description?.trim(),
      };
    });
};

export const parseEducation = (rawData) => {
  if (!rawData || typeof rawData !== "string") return [];

  const parts = rawData.split(",").map((p) => p.trim()).filter(Boolean);
  const result = [];

  for (let i = 0; i < parts.length; i += 3) {
    result.push({
      degree: parts[i],
      institute: parts[i + 1],
      year: parts[i + 2],
    });
  }

  return result;
};
