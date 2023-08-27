exports.handler = async (event) => {
  const formData = JSON.parse(event.body);

  // 在这里处理表单数据，您可以将其保存到数据库、发送电子邮件等等

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "表单提交成功" }),
  };
};
