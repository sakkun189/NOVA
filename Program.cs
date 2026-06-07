using NOVA.Mock.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<MockDataService>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api/bootstrap", (MockDataService service) => Results.Ok(service.GetBootstrap()));

app.MapPost("/api/tenant", (TenantUpdateRequest request, MockDataService service) =>
{
    var tenant = service.UpdateTenant(request);
    return Results.Ok(new ApiResult<TenantDto>("テナント情報を更新しました。", tenant));
});

app.MapPost("/api/users/register", (UserRegistrationRequest request, MockDataService service) =>
{
    var user = service.RegisterUser(request);
    return Results.Ok(new ApiResult<UserDto>("ユーザを登録しました。", user));
});

app.MapPost("/api/users/password-reset", (PasswordResetRequest request, MockDataService service) =>
{
    var result = service.ResetPassword(request);
    return Results.Ok(new ApiResult<PasswordResetResultDto>("パスワードリセットを受け付けました。", result));
});

app.MapFallbackToFile("index.html");

app.Run();
