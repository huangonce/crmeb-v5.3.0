<?php

use think\facade\Route;
/*
 * 路由未匹配到任何路由时的处理函数
 */
Route::miss(function () {
    // 获取当前请求的路径
    $appRequest = request()->pathinfo();
    // 如果路径为空，则设置应用名称为空字符串
    if ($appRequest === null) {
        $appName = '';
    } else {
        // 将双斜杠替换为单斜杠
        $appRequest = str_replace('//', '/', $appRequest);
        // 获取应用名称
        $appName = explode('/', $appRequest)[0] ?? '';
    }

    switch (strtolower($appName)) {
        // 如果应用名称为 admin、kefu 或 app，则返回对应的视图
        case config('app.admin_prefix', 'admin'):
        case 'kefu':
        case 'app':
            return view(app()->getRootPath() . 'public' . DS . config('app.admin_prefix', 'admin') . DS . 'index.html');
        // 如果应用名称为 home，则根据请求类型返回不同的视图或重定向
        case 'home':
            // 如果是移动端访问
            if (request()->isMobile()) {
                return redirect(app()->route->buildUrl('/'));
            } else {
                return view(app()->getRootPath() . 'public' . DS . 'home' . DS . 'index.html');
            }
        // 如果应用名称为 pages，则返回 index.html 视图
        case 'pages':
            return view(app()->getRootPath() . 'public' . DS . 'index.html');
        default:
            // 如果不是移动端访问
            if (!request()->isMobile()) {
                // 如果请求类型为 PC，并且 home 目录存在且没有 mdType 参数，则返回 home/index.html 视图
                if (is_dir(app()->getRootPath() . 'public' . DS . 'home') && !request()->get('mdType')) {
                    return view(app()->getRootPath() . 'public' . DS . 'home' . DS . 'index.html');
                } else {
                    if (request()->get('type')) {
                        return view(app()->getRootPath() . 'public' . DS . 'index.html');
                    } else {
                        return view(app()->getRootPath() . 'public' . DS . 'mobile.html', ['siteName' => sys_config('site_name'), 'siteUrl' => sys_config('site_url') . '/pages/index/index']);
                    }
                }
            } else {
                return view(app()->getRootPath() . 'public' . DS . 'index.html');
            }
    }
});
