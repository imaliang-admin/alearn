---

---

# 介绍-完善测试

alearn3 是一个Java方向的编程知识整理平台，便于自己查询与学习。
完善测试

```java
    public void addLoginHistory(Integer merchantId, HttpServletRequest request) {
        String ip = IPUtils.getIp(request);
        LoginHistory loginHistory = new LoginHistory();
        loginHistory.setLoginIp(ip);
        loginHistory.setLoginCity("未知");
        loginHistory.setMerchantId(merchantId);
        loginHistory.setLoginTime(new Date());
        String system = "其它";
        String agent = request.getHeader("user-agent");
        if (agent.contains("Windows")) {
            system = "Windows客户端";
        } else if (agent.contains("Mac")) {
            system = "Mac客户端";
        } else if (agent.contains("Android")) {
            system = "Android移动客户端";
        } else if (agent.contains("iPad")) {
            system = "iPad客户端";
        } else if (agent.contains("iPhone")) {
            system = "iPhone移动客户端";
        }
        loginHistory.setLoginSystem(system);
        //增加登录记录
        loginHistoryService.insert(loginHistory);

        // 更新商户的最后一次登录时间
        Merchant merchant = new Merchant();
        merchant.setId(merchantId);
        merchant.setLoginTime(DateUtils.getNowDate());
        merchantService.update(merchant);//
    }
```

```java
    public void addLoginHistory(Integer merchantId, HttpServletRequest request) {
        String ip = IPUtils.getIp(request);
        LoginHistory loginHistory = new LoginHistory();
        loginHistory.setLoginIp(ip);
        loginHistory.setLoginCity("未知");
        loginHistory.setMerchantId(merchantId);
        loginHistory.setLoginTime(new Date());
        String system = "其它";
        String agent = request.getHeader("user-agent");
        if (agent.contains("Windows")) {
            system = "Windows客户端";
        } else if (agent.contains("Mac")) {
            system = "Mac客户端";
        } else if (agent.contains("Android")) {
            system = "Android移动客户端";
        } else if (agent.contains("iPad")) {
            system = "iPad客户端";
        } else if (agent.contains("iPhone")) {
            system = "iPhone移动客户端";
        }
        loginHistory.setLoginSystem(system);
        //增加登录记录
        loginHistoryService.insert(loginHistory);

        // 更新商户的最后一次登录时间
        Merchant merchant = new Merchant();
        merchant.setId(merchantId);
        merchant.setLoginTime(DateUtils.getNowDate());
        merchantService.update(merchant);
    }
```
